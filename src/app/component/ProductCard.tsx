// "use client"
// import Link from "next/link";

// interface ProductCardProps {
//   code: string;
//   title: string;
//   subtitle: string;
//   image: string;
// }

// export default function ProductCard({
//   code,
//   title,
//   subtitle,
//   image,
// }: ProductCardProps) {
//   return (
//     <Link href={`/products/pressure-switches/${code.toLowerCase()}`}>
//       <div
//         className="
//           cursor-pointer
//           bg-[#f1f1ef]
//           p-10
//           flex
//           flex-col
//           justify-between
//           transition-all
//           duration-500
//           ease-out
//           hover:scale-[1.06]
//           hover:-translate-y-2
//           hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
//         "
//       >
//         {/* IMAGE */}
//         <div className="flex justify-center items-center h-[280px]">
//           <img
//             src={image}
//             alt={code}
//             className="max-h-full object-contain"
//           />
//         </div>

//         {/* TEXT */}
//         <div className="mt-6 grid grid-cols-2 gap-4 items-end">
//           <span className="text-[22px] font-normal">
//             {code}
//           </span>

//           <div className="text-right text-sm leading-tight">
//             <p>{title}</p>
//             <p>{subtitle}</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }



"use client";
import Link from "next/link";

interface ProductCardProps {
  code: string;
  title: string;
  subtitle: string;
  image: string;
  basePath: string; // 👈 NEW
}

export default function ProductCard({
  code,
  title,
  subtitle,
  image,
  basePath,
}: ProductCardProps) {
  return (
    <Link href={`${basePath}/${code.toLowerCase()}`}>
      <div className="cursor-pointer bg-[#f1f1ef] p-10 flex flex-col justify-between transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
        
        <div className="flex justify-center items-center h-[280px]">
          <img src={image} alt={code} className="max-h-full object-contain" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 items-end">
          <span className="text-[22px] font-normal">{code}</span>

          <div className="text-right text-sm leading-tight">
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
