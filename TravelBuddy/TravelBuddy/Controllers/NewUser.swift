//
//  NewUser.swift
//  TravelBuddy
//
//  Created by Jaafar Rammal on 2/29/20.
//  Copyright © 2020 Jaafar Rammal. All rights reserved.
//

import UIKit

class NewUser: UIViewController, UISearchBarDelegate {

    @IBOutlet weak var profilePic: UIImageView!
    @IBOutlet weak var name: UITextField!
    @IBOutlet weak var country: UITextField!
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var phone: UITextField!
    @IBOutlet weak var desc: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
//        .request(.POST, "http://myserver.com", parameters: parameters, encoding: .JSON)
//        .responseJSON { request, response, JSON, error in
//            print(response)
//            print(JSON)
//            print(error)
//        }
        
        let tap: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: "dismissKeyboard")

        //Uncomment the line below if you want the tap not not interfere and cancel other interactions.
        tap.cancelsTouchesInView = false

        view.addGestureRecognizer(tap)
        but.layer.cornerRadius = 15
    }
    
    @objc func dismissKeyboard() {
        //Causes the view (or one of its embedded text fields) to resign the first responder status.
        view.endEditing(true)
    }
    
    @IBOutlet weak var but: UIButton!
    
    @IBAction func submit(_ sender: Any) {
        let json: [String: Any] = [
        "name": "Potatoe Rammal",
        "email": "JaafarRammal@example.com",
        "phone": "(636) 904-9981",
        "country": "Lebanon",
        "description": "Passionate about robotics and software development, striving for consistent improvement and investing my best in promising projects, aiming to help develop the world for the better.",
        "availability": false
        ]

        let jsonData = try? JSONSerialization.data(withJSONObject: json)

        // create post request
        let url = URL(string: "http://3.8.56.93:3000/profiles/5e5aacb1e99ba8623fc66764")!
        var request = URLRequest(url: url)
        request.httpMethod = "PATCH"

        // insert json data to the request
        request.httpBody = jsonData

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard let data = data, error == nil else {
                print(error?.localizedDescription ?? "No data")
                return
            }
            let responseJSON = try? JSONSerialization.jsonObject(with: data, options: [])
            if let responseJSON = responseJSON as? [String: Any] {
                print(responseJSON)
            }
        }

        task.resume()
        _ = navigationController?.popViewController(animated: true)
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
