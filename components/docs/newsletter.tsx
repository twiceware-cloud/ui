"use client";

import { NewspaperIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { TextFallButton } from "@/components/gsap/text-fall-button";
import { Input } from "@/components/ui/input";
import { ISubscribeResponse, subscribe } from "@/lib/docs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => emailRegex.test(email);

export const Newsletter = () => {
    const [result, setResult] = useState<ISubscribeResponse | undefined>(undefined);
    const [email, setEmail] = useState("");

    useEffect(() => {
        setResult(undefined);
    }, [email]);

    const onSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        if (email.length == 0 || !isValidEmail(email)) {
            setResult({
                success: false,
                message: "Please enter a valid email",
            });
            return;
        }
        const res = await subscribe({ email: email });
        setResult(res);
    };

    return (
        <form onSubmit={onSubmit} className="bg-foreground/5 relative overflow-hidden rounded px-16 py-6 text-center">
            <NewspaperIcon className="text-foreground/10 absolute top-4 left-4 size-12 -rotate-45" />
            <p className="text-lg/none font-medium">Join our newsletter!</p>
            <div className="mt-4 flex items-center gap-3">
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    className="bg-background w-72 shadow-none"
                    placeholder="mail@site.com"
                />
                <TextFallButton className="bg-primary text-primary-foreground cursor-pointer rounded-md py-2 ps-3.5 pe-3.75 text-sm font-medium">
                    Subscribe
                </TextFallButton>
            </div>
            {result && !result.success && <span className="text-destructive text-sm">{result.message}</span>}
            {result && result.success && <span className="text-sm text-green-500">{result.message}</span>}
            <p className="text-muted-foreground mt-2 text-xs">We only send important updates. never spam!</p>
        </form>
    );
};
