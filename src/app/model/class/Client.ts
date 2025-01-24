export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: String;
  address: String;
  city: String;
  pincode: String;
  state: String;
  employeeStrength: number;
  gstNo: String;
  contactNo: String;
  regNo: String;

  constructor() {
    this.clientId = 0;
    this.employeeStrength = 0;
    this.address = '';
    this.city = '';
    this.state = '';
    this.regNo = '';
    this.contactNo = '';
    this.gstNo = '';
    this.pincode = '';
    (this.contactPersonName = ''), (this.companyName = '');
  }
}
