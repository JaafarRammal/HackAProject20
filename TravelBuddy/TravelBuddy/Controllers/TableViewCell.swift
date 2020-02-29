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
    
    var cellUser = user(name: "",country: "",phone: "",email: "",description: "")
    
    func intializeCell(
        cellUser: user
    ){
        self.cellUser = cellUser
        self.picture.image = UIImage.init(named: "user1.png")
        self.name.text = cellUser.name as! String
        self.country.text = cellUser.country as! String
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
