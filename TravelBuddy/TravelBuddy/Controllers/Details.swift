//
//  Details.swift
//  TravelBuddy
//
//  Created by Jaafar Rammal on 2/29/20.
//  Copyright © 2020 Jaafar Rammal. All rights reserved.
//

import UIKit

class Details: UIViewController {

    @IBOutlet weak var profilePic: UIImageView!
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var country: UILabel!
    @IBOutlet weak var phone: UIImageView!
    @IBOutlet weak var enveloppe: UIImageView!
    @IBOutlet weak var chat: UIImageView!
    
    @IBOutlet weak var desc: UITextView!
    
    //Action
    @objc func call() {
        print("Call")
        guard let number = URL(string: "tel://\(currentUser.phone)") else { return }
        UIApplication.shared.open(number)
        
    }
    @objc func email() {
        print("Email")
        if let url = URL(string: "mailto:\(currentUser.email)") {
          if #available(iOS 10.0, *) {
            UIApplication.shared.open(url)
          } else {
            UIApplication.shared.openURL(url)
          }
        }
    }
    
    @objc func message() {
        print("Message")
        let sms: String = "sms:\(currentUser.phone)"
        let strURL: String = sms.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!
        UIApplication.shared.open(URL.init(string: strURL)!, options: [:], completionHandler: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let cc = UITapGestureRecognizer(target: self, action: #selector(call))
       
        let ee = UITapGestureRecognizer(target: self, action: #selector(email))
        
        let mm = UITapGestureRecognizer(target: self, action: #selector(message))
              
        phone.isUserInteractionEnabled = true
        phone.addGestureRecognizer(cc)
        enveloppe.isUserInteractionEnabled = true
        enveloppe.addGestureRecognizer(ee)
        chat.isUserInteractionEnabled = true
        chat.addGestureRecognizer(mm)
        
        name.text = currentUser.name as! String
        country.text = currentUser.country as! String
        desc.text = currentUser.description as! String
        
        let dataDecoded:NSData = NSData(base64Encoded: currentUser.image as! String, options: NSData.Base64DecodingOptions(rawValue: 0))!
        let decodedimage:UIImage = UIImage(data: dataDecoded as Data)!
        self.profilePic.image = decodedimage
        

        // Do any additional setup after loading the view.
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
