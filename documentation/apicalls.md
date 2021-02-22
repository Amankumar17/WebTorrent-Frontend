* To Register User.
```
ROUTE : /signup
API CALL URL : Nodehost/api/register
API REQUEST BODY :

    let userObj=
        {
            "firstName":"xxxx",
            "lastName":"yyyy",
            "emailID":"xxx@gmail.com",
            "password":"xxxxxxxx"
        }

API RESPONSE :
    * status 201 : OK
    * status 409 : USER ALREADY EXISTS!!
    * status 500 : DATABASE ERROR!!
    * status 500 : SERVER ERROR!!
```

* To Login user. (After Email verification) 
```
ROUTE : /signin
API CALL URL : Nodehost/api/login
API REQUEST BODY :
    {
        "emailID": "xxxxx@gmail.com",
        "password": "XXXxxYYY"
    }

API RESPONSE :
    * status 400 : USER NOT FOUND!!
    * status 202 : EMAIL NOT VERIFIED
    * status 201 : LOGGED IN!!
```

* Forgot Password
```
ROUTE : /forgotPassword
API CALL URL : Nodehost/api/forgotPassword
API REQUEST BODY :
    {
        "emailID": "xxxx@gmail.com"
    }

```

* Update Password
```
ROUTE : /updatePassword
API CALL URL : Nodehost/api/updatePassword
API REQUEST BODY :
    {
        "emailID": "xxxxx@gmail.com",
        "password": "XXXxxYYY"
    }
RESPONSE :
    * status 200 : OK
    * status 400 : USER NOT REGISTERED!!    
```

* Verify User Email
```
ROUTE : /verifyEmail
API CALL URL : Nodehost/verifyEmail/:hashedEmail
API RESPONSE :
    * status 200 : OK
    * status 440 : PAGE EXPIRED!!
    * status 500 : DATABASE ERROR!!
```