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
  