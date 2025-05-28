import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

export default async function ExamplePage(props: PageProps) {
    try {
        const path = ((await props.params).slug ?? []).join("/");
        const Component = await import(`@/demo/${path.replace(/^demo\//, "")}`).then((e) => e.Demo);
        return Component ? <Component /> : notFound();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        notFound();
    }
}
