import Link from "next/link";

export default function Menu({ open }: { open: boolean }) {
  return (
    open && (
      <div className=" absolute p-2 bg-white rounded-lg">
        <ul>
          <li>
            <Link href="/shop" className="text-2xl text-green">
              All Products
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-2xl text-red">
              Needlefelting
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-2xl text-yellow">
              Clay
            </Link>
          </li>
        </ul>
      </div>
    )
  );
}
