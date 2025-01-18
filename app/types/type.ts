interface subItemsProps {
	id: number;
	name: string;
	path: string;
  }
  
  export interface navProps {
	id: number;
	name: string;
	path: string;
	icon: React.ReactNode; 
	items: subItemsProps[];
  }