### webclient    
    
    ใช้ React ในการดำเนินการเพื่องสร้างหน้าเว็บเพื่อที่จะติดต่อกับหลังบ้าน

    * ทำ Oauth ในการล๊อคอิน เมื่อ Login ด้วย Facebook จะได้ Token ของ Facebook มาเพื่อเรียกใช้ API ไปยัง server และเก็บ Token นี้ไว้ใน session storage ของ browser
    * การ Post ข้อความ จะทำการส่งข้อความไปยัง server แบบ POST พร้อมกับแนบ JSON Web Token ที่อยู่ใน header ด้วย
    * การ Logout จะเปลี่ยน state ของการ login และแสดงหน้า Login อีกครั้ง
    * การแสดงผลของ Post จะทำการ Call API ไปยัง server เพื่อรับข้อมูล Post ทั้งหมดมาแสดงผลบนหน้าเว็บ

    โดยการทำงานของ webclient นั้นจะเชื่อมต่อกับ webserver ผ่าน API เพื่อรับ-ส่งข้อมูลระหว่างฝั่ง webclient กับฝั่ง webserver ดังนั้นในส่วนของ webserver จะต้องมีการเขียน API เพื่อรองรับการทำงานของ webclient ด้วย โดย API นี้จะเป็นตัวกลางในการเชื่อมต่อระหว่าง webclient กับ webserver โดยในส่วนของ webserver จะทำการตรวจสอบ Token ว่าถูกต้องหรือไม่ และทำการประมวลผลข้อมูลต่างๆ เช่นการบันทึกข้อมูล Post ลงฐานข้อมูล หรือดึงข้อมูล Post ออกมาแสดงผลกับ webclient ตามที่ webclient ได้ร้องขอ

### webserver

    ใช้ Express เป็น framework ในการสร้าง server โดยจะรับ request จาก client ผ่าน http method และใช้ NoSQL database โดยใช้ Mongoose เป็น library ในการเชื่อมต่อกับฐานข้อมูล MongoDB และมีการแบ่งการทำงานของ server เป็น 3 ส่วนคือการ login, การ post และการรับทุก post 