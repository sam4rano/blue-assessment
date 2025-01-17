import Link from "next/link";

const Footer: React.FC = () => {
	return (
	  <footer className="w-full flex flex-col gap-6 font-roboto text-center py-4 text-[16px] leading-[18.4px] text-gray-600">
		<div className="flex justify-center space-x-4 font-roboto  text-grey_200 text-opacity-50 font-light">
		  <Link href="/help" className="hover:underline">
			Help
		  </Link>
		  <Link href="/privacy" className="hover:underline">
			Privacy
		  </Link>
		  <Link href="/terms" className="hover:underline">
			Terms
		  </Link>
		</div>
		<div className="text-grey_100 font-normal">
		  © 2022 BlueChip Technologies, LTD. All rights reserved.
		</div>
	  </footer>
	);
  };
  
  export default Footer;
  