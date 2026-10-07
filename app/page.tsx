import { Suspense } from "react";
import EditableDescription from "@/components/description";
import { fetchItems, fetchPriorityItems } from "@/actions/fetchItems";
import { getCategories, getCategoryName } from "@/actions/categories";
import { getDescription } from "@/actions/description";
import Tabs from "@/components/tabs";

export default async function Page(props: {
  searchParams: Promise<{
    tab?: string;
  }>;
}) {
    const activeCategoryPromise = props.searchParams.then((params) => params.tab || "PRIORITY_ITEMS");
    const itemsPromise = activeCategoryPromise.then((category) =>
      category === "PRIORITY_ITEMS" ? fetchPriorityItems() : fetchItems(category)
    );
    const categoriesPromise = getCategories();
    const descriptionPromise = getDescription();

    const [activeCategory, items, categories, description] = await Promise.all([
      activeCategoryPromise,
      itemsPromise,
      categoriesPromise,
      descriptionPromise,
    ]);

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<p>Loading description</p>}>
        <EditableDescription description={description} />
      </Suspense>
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
