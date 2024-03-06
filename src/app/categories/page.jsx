import { addCategory } from "@/lib/action";
import { getCategories } from "@/lib/data";

const categories = async () => {
  const categories = await getCategories();
  return (
    <div>
      <div>
        <form action={addCategory}>
          <label htmlFor="">Category Name</label>
          <input type="text" name="name" />
          <button>Add category</button>
        </form>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default categories;
