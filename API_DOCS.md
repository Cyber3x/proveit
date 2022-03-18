# API

# Endpoints /api/

1. **`POST /api-auth/register`**

   _Requires:_

   ```
   JSON body:
   {
       "username": <string>,
       "password": <string>
   }
   ```

   _Returns:_

   ```
   {
       "token": <string> - [length 40]
   }
   ```

---

2. **`GET /api-auth/logout`**

   _Returns:_ [UserObject](#token)

3. **`GET match/`**

4. **`POST match/`**
5. **`GET match/`**

6. **`GET match/<id>`**

   _Requires:_

   ```
   URL params:
   - id: <string>
   ```

   _Retruns:_

   ```
   {

   }
   ```

# Types

### Token

rest-framework token: `<string>`
