"use client";

import { useState } from "react";
import { ProductFormData } from "@/types/product";



//real build from chat gpt imports


import BasicInformation from "./sections/BasicInformation";
import PricingSection from "./sections/PricingSection";
import InventorySection from "./sections/InventorySection";
import MediaSection from "./sections/MediaSection";
import SEOSection from "./sections/SEOSection";
import ActionButtons from "./sections/ActionButtons";

// other imports...

export default function ProductForm() {

   // State for form data.day 4 of ecom chat gpt

const [formData, setFormData] = useState<ProductFormData>({
  name: "",
  slug: "",

  shortDescription: "",
  description: "",

  categoryId: "",

  price: 0,
  comparePrice: 0,
  costPrice: 0,

  tax: 0,
  currency: "USD",

  sku: "",
  barcode: "",

  stock: 0,
  lowStockAlert: 0,

  weight: 0,
  brand: "",

  seoTitle: "",
  seoDescription: "",

  videoUrl: "",
});





  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Add Product
        </h1>

        <p className="text-slate-400 mt-2">
          Create a new product for your store.
        </p>

      </div>

      <form className="space-y-8">
                    

           <BasicInformation
              formData={formData}
              setFormData={setFormData}
           />
            <PricingSection
              formData={formData}
              setFormData={setFormData}
            />

           <InventorySection
              formData={formData}
              setFormData={setFormData}
            />

            <MediaSection
              formData={formData}
              setFormData={setFormData}
            />

            <SEOSection
              formData={formData}
              setFormData={setFormData}
            />

            <ActionButtons isLoading={false} />

      </form>

    </div>
  );
}