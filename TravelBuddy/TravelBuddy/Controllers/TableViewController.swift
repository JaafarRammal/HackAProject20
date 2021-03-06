//
//  TableViewController.swift
//  TravelBuddy
//
//  Created by Jaafar Rammal on 2/29/20.
//  Copyright © 2020 Jaafar Rammal. All rights reserved.
//

import UIKit

public struct user{
    var name: Any
    var country: Any
    var phone: Any
    var email: Any
    var description: Any
    var image: Any
}

public var isResult : Bool = false
public var result : [[String: Any]] = [[:]]

public var currentUser = user(name: "", country: "", phone: "", email: "", description: "", image: "")

public var usersData: [user] = [
//    user(name: "Jaafar Rammal", country: "Lebanon", phone: "123456", email: "jarammal@gmail.com", description: "Hello"),
//    user(name: "Mohamed Rammal", country: "Lebanon", phone: "123456", email: "jarammal@gmail.com", description: "Hello"),
//    user(name: "Ali Rammal", country: "Lebanon", phone: "123456", email: "jarammal@gmail.com", description: "Hello")
    ]

class TableViewController: UITableViewController, UISearchBarDelegate {

    @IBOutlet weak var searchBar: UISearchBar!
    var filtered = usersData
    
    override func viewDidLoad() {
        super.viewDidLoad()
        searchBar.delegate = self
        self.tableView.rowHeight = 100
        result = HTTPsendRequest(upcCode: "profiles")!
        while (!isResult) {}
        var u = user(name: "",country: "",phone: "",email: "",description: "", image: "")
        usersData = []
        for element in result {
            u.name = element["name"] as! String
            u.country = element["country"] as! String
            u.phone = element["phone"]! as! String
            u.email = element["email"] as! String
            u.description = element["description"] as! String
            u.image = element["avatar"]
            usersData.append(u)
        }
        // Uncomment the following line to preserve selection between presentations
        self.clearsSelectionOnViewWillAppear = false
        filtered = usersData

        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem
        
        //Looks for single or multiple taps.
        let tap: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: "dismissKeyboard")

        //Uncomment the line below if you want the tap not not interfere and cancel other interactions.
        tap.cancelsTouchesInView = false

        view.addGestureRecognizer(tap)
    }
    
    @objc func dismissKeyboard() {
        //Causes the view (or one of its embedded text fields) to resign the first responder status.
        view.endEditing(true)
    }

    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return filtered.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cardCell", for: indexPath) as! TableViewCell

        // Configure the cell...
        let currentUser: user = filtered[indexPath.item]
        cell.intializeCell(cellUser: currentUser)
        cell.layer.shadowRadius = 0
        cell.layer.shadowOpacity = 0
        cell.layer.shadowColor = CGColor.init(srgbRed: 0, green: 0, blue: 0, alpha: 1)
        return cell
    }
    
    
    func searchBarTextDidEndEditing(_ searchBar: UISearchBar) {
        self.searchBar.endEditing(true)
    }


    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {

        filtered = usersData.filter({ (us) -> Bool in
            let tmp: NSString = us.country as! NSString
            let range = tmp.range(of: searchText, options: NSString.CompareOptions.caseInsensitive)
            return range.location != NSNotFound
        })
        if(searchText == ""){
            filtered = usersData
        }
        self.tableView.reloadData()
    }


    
    /*
    // Override to support conditional editing of the table view.
    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }
    */

    /*
    // Override to support editing the table view.
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            // Delete the row from the data source
            tableView.deleteRows(at: [indexPath], with: .fade)
        } else if editingStyle == .insert {
            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
        }    
    }
    */

    /*
    // Override to support rearranging the table view.
    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {

    }
    */

    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the item to be re-orderable.
        return true
    }
    */

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */
    
    func HTTPsendRequest(upcCode:String) -> [[String: Any]]? {
        
    guard let url = URL(string: "http://3.8.56.93:3000/profiles") else {return [[:]]}

        let task = URLSession.shared.dataTask(with: url) { (data, response, error) in
        guard let dataResponse = data,
                 error == nil else {
                 print(error?.localizedDescription ?? "Response Error")
                 return }
           do{
            if let json = try? JSONDecoder().decode(Array<String>.self, from: dataResponse){

                let firstElement = json.first ?? "First Element Not Found!"
                print(firstElement)
            }
               let jsonResponse = try JSONSerialization.jsonObject(with:
                                      dataResponse, options: [])
            guard let jsonArray = jsonResponse as? [[String: Any]] else {
                print("empty")
                  return
            }
            result = jsonArray
            print(result)
            isResult = true

           } catch let parsingError {
               print("Error", parsingError)
          }
        }
        task.resume()
        return result
        
    }
}
