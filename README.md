# CPSC 481 - Theatre Ticketing System

## Group Members
T07 - Group 4
* Jacob N.
* Ethan P.
* Anand P.
* Liam P.
* J. Ty P.

## Instructions for Running This System
1. Navigate to the project directory, run `npm install` and press `Enter` to execute the initialization.
2. Next, run `npm run dev` to begin a localhost session for the site.
3.  Finally, navigate to [http://localhost:3000/](http://localhost:3000/), using the port the site was opened on (default port is 3000).
    - Alternatively, [Click here to navigate to the site directly](https://movie-kiosk.vercel.app) without the need to run any code.

## Implemented Functions
The following features/functionalities have been implemented into our final design:
* **Landing Page**
  * Clicking a movie will navigate directly to the _Ticket Page_ for the clicked movie.
  * Clicking the **Movie List Button** will navigate to the _Movie List Page._
* **Movie List Page**
  * Searching movies by name.
  * Clicking a movie will navigate to the _Showtime Page._
* **Showtime Wizard**
  * Clicking any date will navigate to the _Ticket Page_ for the respective day.
* **Ticket Wizard**
  * Clicking the **+** or **-** symbols will add or subtract a ticket of that type respectively. Multiple can be selected at once.
    * Clicking on a **bundle** will toggle the bundle for the selected tickets, and increase their cost due to the extra concessions.
  * Clicking the **Next Button** will navigate to the _Seat Selection Page._
* **Seat Selection Wizard**
  * Can click on an **Available** or **Accessible** seat to select it. 
    * Can be clicked again to de-select the seat.
    * Clicking a new seat changes the seat selected earliest.
  * Clicking the **Confirm Seating Button** returns to the _Landing Page_ and updates the **Cart.** 
* **Cart**
  * Clicking on the **Trashcan Button** will prompt a popup asking to confirm item deletion. If confirmed, the item will be removed from the **Cart.**
  * Clicking on the **Clear All Button** will prompt a popup asking to confirm item deletion. If confirmed, then the entire cart will be emptied.
  * Clicking on the **Checkout Button** will navigate to the _Checkout Page._ 
* **Checkout Page**
  * Clicking on the **Coupon Button** will open the _Coupon Modal._
    * Searching coupons by name.
    * Clicking **Redeem** for any coupon will change to a modal to allow coupon entry or prompt for physical scanning.
      * Clicking **Apply** will apply the coupon and close the modal.
  * Clicking on  the **Loyalty Button** will open the _Loyalty Modal._
    * Once a valid phone number (see Data Entry for working number) is entered and **Continue** is pressed, the modal will swap to _Loyalty Points._
      * Enter a valid number of points (**>0** and **<Available Points**). Pressing **Submit** will reduce the total cost by 1 cent per point.
* **Scanned Ticket(s) Modal**
  * Can select a ticket by pressing the **ticket name.**
  * Can Select **Refund** to open the _Refund Modal._
    * Can select a **refund option**. Once selected, will navigate to a success page.
  * Can select **Swap** to navigate to the _Swap Page._
* **Swap Page**
  * Selecting a different movie will open the _Showtime Wizard._ A ticket can then be purchased as normal, but will automatically set one ticket of the same type to $0 after completion.
* **Misc. Features** 
  * The **Home Button** in the centre of the screen will navigate back to the _Landing Page._
  * The **Back Button** will navigate to the previous page.
  * Beside where the **Signout Button** is, three lines mimic scanning a ticket, and open the _Scanned Ticket Modal._


## Data Entry
Our system only has a single point at which specific data needs to be entered.
When entering the **Member's Phone Number** for **Loyalty Points** within the **Loyalty Modal**, you must input `1234567890`

