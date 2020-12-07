export class Documents{
        _id: number;
        dateOfRecording: string;
        dateOfCreation: string;
        transactionType: string;
        status: string;
        year: number;
        businessPartner: BusinessPartner;

        constructor(obj?:any){
            this._id = obj && obj._id || null;
            this.dateOfRecording = obj && obj.dateOfRecording || '';
            this.dateOfCreation = obj && obj.dateOfCreation || '';
            this.transactionType = obj && obj.transactionType || '';
            this.status = obj && obj.status || '';
            this.year = obj && obj.year || null;
            this.businessPartner = obj && new BusinessPartner(obj.businessPartner) || null;
        }

}

export class BusinessPartner {
  name: string;
  city: string;
  address: string;

  constructor(obj?: any){
      this.name = obj && obj.name || '';
      this.city = obj && obj.city || '';
      this.address = obj && obj.address || '';
  }
}