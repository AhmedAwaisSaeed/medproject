// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);




import { Navigation } from "react-native-navigation";
// import App from "./App"
import Signin from "./Signin";
import Signup from "./Signup";
import Catagoires from "./Catagoires";
import BloodDonorList from "./BloodDonorList";
import Bank from "./Bank";
import FindDoctor from "./FindDoctor";
import BloodDonorSubmitForm from "./BloodDonorSubmitForm";
import AboutUs from "./AboutUs";
import FindDoctor_1 from "./FindDoctor_1";
import AppointMent from "./AppointMent";
import Doctor from "./Doctor";
import Laboratory from "./Laboratory";
import Laboratory_List from "./Laboratory_List";
import FindStore from "./FindStore";
import FindStore_1 from "./FindStore_1";
import AppointMent_Management from "./AppointMent_Management";
import Blood_Bank from "./Blood_Bank";
import Blood_Bank_B from "./BLood_Bank_B";
import Hospital from "./Hospital";
import Hospital_F from "./Hospital_F";
import Contact_Us from "./Contact_Us";
import Donor from "./Donor";
import EditAppointment from "./EditAppointment";

Navigation.registerComponent(`Signin`, () => Signin);
Navigation.registerComponent(`Signup`, () => Signup);
Navigation.registerComponent(`Catagoires`, () => Catagoires);
Navigation.registerComponent(`BloodDonorList`, () => BloodDonorList );
Navigation.registerComponent(`Bank`, () => Bank);
Navigation.registerComponent(`FindDoctor`, () => FindDoctor);
Navigation.registerComponent(`BloodDonorSubmitForm`, () => BloodDonorSubmitForm);
Navigation.registerComponent(`AboutUs`, () => AboutUs );
Navigation.registerComponent(`FindDoctor_1`,() => FindDoctor_1 ); 
Navigation.registerComponent(`AppointMent`,() => AppointMent ); 
Navigation.registerComponent(`Doctor`,() => Doctor );
Navigation.registerComponent(`Laboratory`,()=> Laboratory); 
Navigation.registerComponent(`Laboratory_List`,()=>Laboratory_List);
Navigation.registerComponent(`FindStore`,()=> FindStore);
Navigation.registerComponent(`FindStore_1`,()=> FindStore_1)
Navigation.registerComponent(`AppointMent_Management`,()=>AppointMent_Management);
Navigation.registerComponent(`Blood_Bank`,()=>Blood_Bank);
Navigation.registerComponent(`Blood_Bank_B`,()=> Blood_Bank_B);
Navigation.registerComponent(`Hospital`,()=>Hospital);
Navigation.registerComponent(`Hospital_F`,()=> Hospital_F);
Navigation.registerComponent(`Contact_Us`,()=>Contact_Us);
Navigation.registerComponent(`Donor`,()=>Donor);
Navigation.registerComponent(`EditAppointment`,()=>EditAppointment);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false
    }
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
                  name: "Signin"
              // name: "Signup"
            //  name: "Bank"
                // name: "Catagoires"
          }
        }]
      }
    }
  });
});