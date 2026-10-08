import { Suspense } from "react";
import { fetchItems, fetchPriorityItems } from "@/actions/fetchItems";
import { getCategories, getCategoryName } from "@/actions/categories";
import Tabs from "@/components/tabs";
import Description from "@/components/description-wrapper";

export default async function Page(props: {
    searchParams: Promise<{
        tab?: string;
    }>;
}) {
    const activeCategoryPromise = props.searchParams.then(
        (params) => params.tab || "PRIORITY_ITEMS",
    );
    const itemsPromise = activeCategoryPromise.then((category) =>
        category === "PRIORITY_ITEMS"
            ? fetchPriorityItems()
            : fetchItems(category),
    );
    const categoriesPromise = getCategories();

    const [activeCategory, items, categories] = await Promise.all([
        activeCategoryPromise,
        itemsPromise,
        categoriesPromise,
    ]);

    return (
        <main className="container mx-auto p-4">
            <Description />
            <br />
            <Suspense fallback={<p>Loading tabs</p>}>
                <Tabs
                    activeCategory={activeCategory}
                    items={items}
                    categories={categories}
                />
            </Suspense>
        </main>
    );
}
