import { Navigation } from 'react-native-navigation';

export const goHome = () => Navigation.setRoot({
  root: {
      stack: {
        id: 'Login',
        children: [
          {
            component: {
              
                                  name: "Signin",
                                  // name: "UpdateAssignment",
                                      // name: "ContractTodayPage",
                              options: {
                                statusBar: {
                                  drawBehind: true,
                                  visible: false
                                }
                              }
             
            }
          }
      ],
      

     
      }
    }
    
});



 