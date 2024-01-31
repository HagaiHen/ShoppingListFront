class Order {
  constructor(_name = "", address = "", email = "", details = "") {
    this._name = _name;
    this.address = address;
    this.email = email;
    this.details = details;
  }

  toJSON() {
    return {
      _name: this._name,
      address: this.address,
      email: this.email,
      details: this.details
    };
  }
  

  static fromJSON(json) {
    return new Order(
      json._name,
      json.address,
      json.email,
      json.details
    );
  }
  
}

export default Order;