//
//  TableViewCell.swift
//  TravelBuddy
//
//  Created by Jaafar Rammal on 2/29/20.
//  Copyright © 2020 Jaafar Rammal. All rights reserved.
//

import UIKit

class TableViewCell: UITableViewCell {

    @IBOutlet weak var picture: UIImageView!
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var country: UILabel!
    
    var cellUser = user(name: "",country: "",phone: "",email: "",description: "", image: "")
    
    func intializeCell(
        cellUser: user
    ){
        self.cellUser = cellUser
        
        self.name.text = cellUser.name as! String
        self.country.text = cellUser.country as! String
        let dataDecoded:NSData = NSData(base64Encoded: cellUser.image as! String, options: NSData.Base64DecodingOptions(rawValue: 0))!
        let decodedimage:UIImage = UIImage(data: dataDecoded as Data)!
        self.picture.image = decodedimage
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        currentUser = cellUser
        // Configure the view for the selected state
    }

}
