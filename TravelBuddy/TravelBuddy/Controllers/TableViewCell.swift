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
    
    func intializeCell(
        pic: UIImage,
        name: String,
        country: String
    ){
        self.picture.image = pic
        self.name.text = name
        self.country.text = country
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
