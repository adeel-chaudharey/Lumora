"use client";

import { ProductFormData } from "@/types/product";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type BasicInformationProps = {
  formData: ProductFormData;
  setFormData: Dispatch<SetStateAction<ProductFormData>>;
};

type Category = {
  id: string;
  name: string;
};

export default function BasicInformation({
  formData,
  setFormData,
}: BasicInformationProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    }

    loadCategories();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-8 text-2xl font-semibold text-white">
        Basic Information
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Product Name */}
        <div className="col-span-2">
          <label className="mb-2 block text-sm text-slate-300">
            Product Name
          </label>

          <input
            type="text"
            placeholder="MacBook Pro M4"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Slug
          </label>

          <input
            type="text"
            placeholder="macbook-pro-m4"
            value={formData.slug}
            onChange={(e) =>
              setFormData({
                ...formData,
                slug: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Category
          </label>

          <select
            value={formData.categoryId}
            onChange={(e) =>
              setFormData({
                ...formData,
                categoryId: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div className="col-span-2">
          <label className="mb-2 block text-sm text-slate-300">
            Short Description
          </label>

          <textarea
            rows={3}
            placeholder="Short summary..."
            value={formData.shortDescription}
            onChange={(e) =>
              setFormData({
                ...formData,
                shortDescription: e.target.value,
              })
            }
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Full Description */}
        <div className="col-span-2">
          <label className="mb-2 block text-sm text-slate-300">
            Full Description
          </label>

          <textarea
            rows={8}
            placeholder="Detailed product description..."
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>
      </div>
    </div>
  );
}
//chat gpt  generated, will be removed

//this is a server component, so we can use async/await to fetch data from the database and display it in the form fields.

//we can also use the useState hook to manage the form data and update it when the user types in the input fields.