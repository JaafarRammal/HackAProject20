//
//  NewUser.swift
//  TravelBuddy
//
//  Created by Jaafar Rammal on 2/29/20.
//  Copyright © 2020 Jaafar Rammal. All rights reserved.
//

import UIKit

class NewUser: UIViewController {

    @IBOutlet weak var profilePic: UIImageView!
    @IBOutlet weak var name: UITextField!
    @IBOutlet weak var country: UITextField!
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var phone: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        .request(.POST, "http://myserver.com", parameters: parameters, encoding: .JSON)
        .responseJSON { request, response, JSON, error in
            print(response)
            print(JSON)
            print(error)
        }
        
        let tap: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: "dismissKeyboard")

        //Uncomment the line below if you want the tap not not interfere and cancel other interactions.
        tap.cancelsTouchesInView = false

        view.addGestureRecognizer(tap)
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
