import React from 'react'
import OfficialDetails from './OfficialDetails';
import Submission from './Submission';
import './design.css'


class PrimaryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            middleName: '',
            lastName: '',
            state1: [],
            cities: [],
            states: '',
            city: '',
            organisationname: '',
            experiance: '',
            salary: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeCountry = this.changeCountry.bind(this);



    }
    //Proceed to next tab
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //Proceed to previous tab

    preStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }




    //handle state feilds change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });

    }


    continue = e => {
        e.preventDefault();
        if (this.state.firstName === "") {
            alert("* feilds are requried to fill");
        }
        else if (this.state.lastName === "") {
            alert("* feilds are requried to fill");
        }
        else if (this.state.states === "") {
            alert("* feilds are requried to fill");
        }
        else if (this.state.city === "") {
            alert("* feilds are requried to fill");
        }
        else {
            this.nextStep();
        }

    }



    componentDidMount() {
        this.setState({
            state1: [
                { name: 'Uttar Pradesh', cities: ['Agra','Allahabad','Aligarh','Ambedkar Nagar','Auraiya','Azamgarh','Barabanki','Budaun','Bagpat','Bahraich','Bijnor','Ballia','Banda','Balrampur','Bareilly','Basti','Bulandshahr','Chandauli','Chhatrapati Shahuji Maharaj Nagar','Chitrakoot','Deoria','Etah','Kanshi Ram Nagar','Etawah','Firozabad','Farrukhabad','Fatehpur','Faizabad','Gautam Buddh Nagar','Gonda','Ghazipur','Gorakhpur','Ghaziabad','Hamirpur','Hardoi','Mahamaya Nagar','Jhansi','Jalaun','Jyotiba Phule Nagar','Jaunpur district','Ramabai Nagar (Kanpur Dehat)','Kannauj','Kanpur','Kaushambi','Kushinagar','Lalitpur','Lakhimpur Kheri','Lucknow','Mau','Meerut','Maharajganj','Mahoba','Mirzapur','Moradabad','Mainpuri','Mathura','Muzaffarnagar','Panchsheel Nagar district (Hapur)','Pilibhit','Shamli','Pratapgarh','Rampur','Raebareli','Saharanpur','Sitapur','Shahjahanpur','Sant Kabir Nagar','Siddharthnagar','Sonbhadra','Sant Ravidas Nagar','Sultanpur','Shravasti','Unnao','Varanasi'] },
                { name: 'Maharashtra', cities: ['Ahmednagar','Akola','Amravati','Aurangabad','Bhandara','Beed','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai suburban','Nandurbar','Nanded','Nagpur','Nashik','Osmanabad','Parbhani','Pune','Raigad','Ratnagiri','Sindhudurg','Sangli','Solapur','Satara','Thane','Wardha','Washim','Yavatmal'] },
                { name: 'Andhra Pradesh', cities: [ 'Anantapur','Chittoor','Kakinada','Guntur', 'Krishna','Kurnool','Medak','Ongole','Hyderabad','Srikakulam','Nellore','Visakhapatnam', 'Vizianagaram','Eluru','Kadapa']},
                { name: 'Arunachal Pradesh', cities: ['Anjaw','Changlang', 'East Siang','Kurung Kumey','Lohit','Lower Dibang Valley','Lower Subansiri','Papum Pare','Tawang','Tirap','Dibang Valley','Upper Siang','Upper Subansiri','West Kameng','West Siang'] },
                { name: 'Assam', cities: ['Baksa','Barpeta','Bongaigaon','Cachar','Chirang','Darrang','Dhemaji','Dima Hasao','Dhubri','Dibrugarh','Goalpara','Golaghat','Hailakandi','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Marigaon','Nagaon','Nalbari','Sibsagar','Sonitpur','Tinsukia','Udalguri'] },
                { name: 'Bihar', cities: ['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran'] },
                { name: 'Chhattisgarh', cities: ['Bastar','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Jashpur','Janjgir-Champa','Korba','Koriya','Kanker','Kabirdham (Kawardha)','Mahasamund','Narayanpur','Raigarh', 'Rajnandgaon','Raipur','Surguja'] },
                { name: 'Goa', cities: ['North Goa','South Goa'] },
                { name: 'Gujarat', cities: ['Ahmedabad','Amreli district','Anand','Banaskantha','Bharuch','Bhavnagar','Dahod','The Dangs','Gandhinagar','Jamnagar','Junagadh','Kutch','Kheda','Mehsana','Narmada','Navsari','Patan','Panchmahal','Porbandar','Rajkot','Sabarkantha','Surendranagar','Surat','Vyara','Vadodara','Valsad'] },
                { name: 'Haryana', cities: ['Ambala','Bhiwani','Faridabad','Fatehabad','Gurgaon','Hissar','Jhajjar','Jind','Karnal','Kaithal','Kurukshetra','Mahendragarh', 'Mewat','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamuna Nagar'] },
                { name: 'Himachal Pradesh', cities: ['Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Sirmaur','Solan','Una'] },
                { name: 'Jharkhand', cities: ['Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribag','Jamtara','Khunti','koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahibganj','Seraikela Kharsawan','Simdega','West Singhbhum'] },
                { name: 'Karnataka', cities: ['Bagalkot','Bangalore Rural','Bangalore Urban','Belgaum','Bellary','Bidar','Bijapur','Chamarajnagar','Chikkamagaluru','Chikkaballapur','Chitradurga','Davanagere','Dharwad','Dakshina Kannada','Gadag','Gulbarga','Hassan','Haveri district','Kodagu','Kolar','Koppal','Mandya','Mysore','Raichur','Shimoga','Tumkur','Udupi','Uttara Kannada','Ramanagara','Yadgir'] },
                { name: 'Kerala', cities: ['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thrissur','Thiruvananthapuram','Wayanad'] },
                { name: 'Madhya Pradesh', cities: ['Alirajpur','Anuppur','Ashok Nagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Hoshangabad','Indore','Jabalpur','Jhabua','Katni','Khandwa (East Nimar)','Khargone (West Nimar)','Mandla','Mandsaur','Morena','Narsinghpur','Neemuch','Panna','Rewa','Rajgarh','Ratlam','Raisen','Sagar','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha'] },
                { name: 'Manipur', cities: ['Bishnupur','Churachandpur','Chandel','Imphal East','Senapati','Tamenglong','Thoubal','Ukhrul','Imphal West'] },
                { name: 'Meghalaya', cities: ['East Garo Hills','East Khasi Hills','Jaintia Hills','Ri Bhoi','South Garo Hills','West Garo Hills','West Khasi Hills'] },
                { name: 'Mizoram', cities: ['Aizawl','Champhai','Kolasib','Lawngtlai','Lunglei','Mamit','Saiha','Serchhip'] },
                { name: 'Nagaland', cities: ['Dimapur','Kohima','Mokokchung','Mon','Phek','Tuensang','Wokha','Zunheboto'] },
                { name: 'Odisha', cities: ['Angul','Boudh (Bauda)','Bhadrak','Balangir','Bargarh (Baragarh)','Balasore','Cuttack','Debagarh (Deogarh)','Dhenkanal','Ganjam','Gajapati','Jharsuguda','Jajpur','Jagatsinghpur','Khordha','Kendujhar (Keonjhar)','Kalahandi','Kandhamal','Koraput','Kendrapara','Malkangiri','Mayurbhanj','Nabarangpur','Nuapada','Nayagarh','Puri','Rayagada','Sambalpur','Subarnapur (Sonepur)','Sundergarh'] },
                { name: 'Punjab', cities: ['Amritsar','Barnala','Bathinda','Firozpur','Faridkot','Fatehgarh Sahib','Fazilka','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Mansa','Moga','Sri Muktsar Sahib','Pathankot','Patiala','Rupnagar','Ajitgarh (Mohali)','Sangrur','Nawanshahr','Tarn Taran'] },
                { name: 'Rajasthan', cities: ['Ajmer','Alwar','Bikaner','Barmer','Banswara','Bharatpur','Baran','Bundi','Bhilwara','Churu','Chittorgarh','Dausa','Dholpur','Dungapur','Ganganagar','Hanumangarh','Jhunjhunu','Jalore','Jodhpur','Jaipur','Jaisalmer','Jhalawar','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sikar','Sawai Madhopur','Sirohi','Tonk','Udaipur'] },
                { name: 'Sikkim', cities: ['East Sikkim','North Sikkim','South Sikkim','West Sikkim'] },
                { name: 'Tamil Nadu', cities: ['Ariyalur','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kanchipuram','Kanyakumari','Karur','Madurai','Nagapattinam','Nilgiris','Namakkal','Perambalur','Pudukkottai','Ramanathapuram','Salem','Sivaganga','Tirupur','Tiruchirappalli','Theni','Tirunelveli','Thanjavur','Thoothukudi','Tiruvallur','Tiruvarur','Tiruvannamalai','Vellore','Viluppuram','Virudhunagar'] },
                { name: 'Telangana', cities: ['Hyderabad','Warangal','Nizamabad','Khammam','Karimnagar', 'Ramagundam', 'Mahbubnagar', 'Nalgonda','Adilabad','Suryapet', 'Miryalaguda','Jagtial'] },
                { name: 'Tripura', cities: ['Dhalai','North Tripura','South Tripura','Khowai','West Tripura'] },
                { name: 'Uttarakhand', cities: ['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi'] },
                { name: 'West Bengal', cities: ['Birbhum','Bankura','Bardhaman','Darjeeling','Dakshin Dinajpur','Hooghly','Howrah','Jalpaiguri','Cooch Behar','Kolkata','Maldah','Paschim Medinipur','Purba Medinipur','Murshidabad','Nadia','North 24 Parganas','South 24 Parganas','Purulia','Uttar Dinajpur'] },
                { name: 'Delhi', cities: ['Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','South Delhi','South West Delhi','West Delh'] },
            ]
        });
    }


    changeCountry(event) {
        this.setState({ states: event.target.value });
        this.setState({ cities: this.state.state1.find(cntry => cntry.name === event.target.value).cities });
    }





    render() {
        const { step } = this.state;
        const { firstName, middleName, lastName, states, city, organisationname, experiance, salary } = this.state;
        const value = { firstName, middleName, lastName, states, city, organisationname, experiance, salary };

        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <div className="row">
                            <div className="col-md-6 offset-3 bg-dark">
                                <h3 className="text-monospace text-light">Primary Details</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-3 bg-light">
                                <form>
                                    <div className="form-group text-left">
                                        <label className="important font-weight-bold">First Name</label>
                                        <input type="text" className="form-control" value={value.firstName} id="firstname" placeholder="Eg; Aniket" name="firstName" onChange={this.handleChange('firstName')} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label className="optional font-weight-bold">Middle Name</label>
                                        <input type="text" className="form-control" value={value.middleName} id="middlename" placeholder="Eg; Mani " name="middleName" onChange={this.handleChange('middleName')} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label className="important font-weight-bold">Last Name</label>
                                        <input type="text" className="form-control" value={value.lastName} id="lastname" placeholder="Eg; Tripathi " name="lastName" onChange={this.handleChange('lastName')} />
                                    </div>

                                    <div className="form-group text-left">
                                        <label className="important font-weight-bold">State</label>
                                        <select placeholder="State" value={value.states} className="form-control" name="states" onChange={this.changeCountry}>
                                            <option>--Choose State--</option>
                                            {this.state.state1.map((e, key) => {
                                                return <option key={key}>{e.name}</option>;
                                            })}
                                        </select>
                                    </div>

                                    <div className="form-group text-left">
                                        <label className="important font-weight-bold">City</label>
                                        <select placeholder="City" value={value.city} className="form-control" name="city" onChange={this.handleChange('city')}>
                                            <option>--Choose City--</option>
                                            {this.state.cities.map((e, key) => {
                                                return <option key={key}>{e}</option>;
                                            })}
                                        </select>
                                    </div>

                                    <button type="submit" className="btn btn-dark btnsize" onClick={this.continue} >Continue</button>

                                </form>

                            </div>
                        </div>
                    </React.Fragment>
                )
            case 2:
                return (
                    <OfficialDetails
                        nextStep={this.nextStep}
                        preStep={this.preStep}
                        handleChange={this.handleChange}
                        value={value}
                    />
                )
            case 3:
                return (
                    <Submission
                        nextStep={this.nextStep}
                        preStep={this.preStep}
                        value={value}
                    />
                )
            default:
                return (
                    <h4 className="text-success">Successfully submitted..!!</h4>
                )
        }
    }
}
export default PrimaryDetails;

