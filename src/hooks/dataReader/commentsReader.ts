import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, push, ref, child } from "firebase/database";
import { useEffect, useState } from "react";
import type { CommentProps } from "../../components/comment/Comment";

console.log("Initialized Firebase with config:");
console.log(import.meta.env)

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        signInAnonymously(auth);
    }
});

interface FireBaseComment {
    datetime: string;
    nickName: string;
    commentText: string;
    iconIndex: number;
}

const useFireBaseComments = (section: string) => {
    const [data, setData] = useState<Object>({});
    const commentsRef = ref(db, 'comments/' + section);

    const readData = () => {
        const unsubscribe = onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            setData(data || {});
        });
        return () => unsubscribe();
    }

    const addData = async (comment: FireBaseComment) => {
        await push(commentsRef, comment);
    }

    useEffect(() => {
        try {
            return readData();
        } catch (error) {
            console.error("Error reading comments:", error);
        }
    }, [section]);

    return { data, addData, commentsRef };
}

export const useComments = (section: string, includeSubsections: boolean = false) => {
    const [comments, setComments] = useState<CommentProps[]>([]);
    const { data, addData, commentsRef } = useFireBaseComments(section);
    
    const addComment = async (comment: CommentProps) => {
        const firebaseComment = buildFireBaseComment(comment);
        if (includeSubsections) {
            await addToMain(firebaseComment);
        }
        else {
            await addData(firebaseComment);
        }
    };

    const readComments = () => {
        const normalizedComments = buildComments(Object.values(data));
        setComments(normalizedComments);
    }

    const readNovelComments = () => {
        const allData = readIncludingSubsections();
        const normalizedComments = buildComments(allData);
        setComments(normalizedComments);
    }

    const checkFireBaseComment = (obj: any): obj is FireBaseComment => {
        return obj && typeof obj.datetime === 'string' && typeof obj.nickName === 'string' &&
            typeof obj.commentText === 'string' && typeof obj.iconIndex === 'number';
    }

    const mapComments = (data: FireBaseComment): CommentProps => {
        const rawDatetime = (data as any).datetime;
        return {
            ...data,
            datetime: rawDatetime ? new Date(rawDatetime) : rawDatetime
        };
    }

    const buildFireBaseComment = (comment: CommentProps): FireBaseComment => {
        return {
            datetime: new Date().toISOString(),
            nickName: comment.nickName,
            commentText: comment.commentText,
            iconIndex: comment.iconIndex
        }
    }

    const buildComments = (data: any[]): CommentProps[] => {
        const loadedComments: FireBaseComment[] = data.filter(checkFireBaseComment);
        const normalizedComments: CommentProps[] = loadedComments.map((c) => mapComments(c));
        normalizedComments.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
        return normalizedComments;
    }

    const addToMain = async (comment: FireBaseComment) => {
        const mainCommentRef = child(commentsRef, 'main');
        await push(mainCommentRef, comment);
    }

    const readIncludingSubsections = () => {
        const mainData = (data as any)['main'] || {};
        const sectionsTitle = Object.keys(data).filter(key => key !== 'main');
        const chaptersData = sectionsTitle.flatMap(sectionKey => {
            const sectionData = (data as any)[sectionKey] || {};
            return Object.values(sectionData).flatMap((v: any) => Object.values(v));
        });
        const allData = [...Object.values(mainData), ...chaptersData];
        return allData;
    }

    useEffect(includeSubsections ? readNovelComments : readComments, [data]);

    return { addComment, comments };
};