//რედუსერი აუცილებლად უნდა იყოს ფუნქცია და არა კომპონენტი. ყურადღება მიაქციეთ ფაილის შექმნის გზას.

export default function userReducer(state,action){// იღებს ორ არგუმენტს, მიმდინარე მდგოამრეობა და ქმედება
    switch (action.type){
        //ქეისებში შეგვიძლია ჩვენ მოვიფიქროთ ნებისმიერი მდგოამრეობა ანუ ქეისი და სესაბამისი პასუხი.
        case "set_users": // მაგალითად set userის გამოძახებისას პასუხი იქნება მონაცემების ჩატვირთვა
            return action.data;
        case "add_users": // add user ის გამოძახებისას პასუხი იქნება ძველი მონაცემებს + ახალი ველიუს ჩვენება
            return [action.data, ...state];
        case "remove_user": //remove user ფილტრავს აიდის მიხედვით და შლის ობიექტს სიიდან
            return state.filter(item => item.id !== action.payload) ;    
        default:
            return state //შეგიძლიათ დააბრუნოთ სთეითი ან ერორი
    }
}