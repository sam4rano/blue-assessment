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

  export interface Branch {
	id: number;
	name: string;
	location: string;
	manager: string;
	phoneNumber: string;
	email: string;
	createdAt: string;
	updatedAt: string;
  }


  export interface LoginProps {
	username: string;
	password: string;
  }
  
  export interface OtpProps {
	otp: string;
  }


  export interface RequestProps {
	status:string,
	request:string,
	type:string,
	destination:string
  }
  

  export interface DateRange {
	startDate: Date | null;
	endDate: Date | null;
  }
  
  export interface Transaction {
	originator: {
	  name: string;
	  id?: string;
	};
	fromBranch: string;
	toBranch: string;
	code: string;
	amount: number;
	currency: string;
	status: "Fulfilled" | "Unfulfilled" | "Pending";
	date: Date;
  }

  export interface TransactionEvacuation {
	originator: {
	  name: string;
	  id?: string;
	};
	fromBranch: string;
	code: string;
	amount: number;
	currency: string;
	status: "Fulfilled" | "Unfulfilled" | "Pending";
	date: Date;
  }