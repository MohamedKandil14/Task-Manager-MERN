# نظام إدارة مهام متكامل (Task Manager - MERN Stack)

**نظام إدارة مهام كامل الميزات تم بناؤه باستخدام MERN Stack (MongoDB, Express.js, React, Node.js).**

يتيح هذا التطبيق للمستخدمين تسجيل الدخول، إنشاء مهامهم الخاصة، تتبع حالتها، وتحديثها أو حذفها.

---

## الوظائف الرئيسية:

* **المصادقة (Authentication):**
    * تسجيل مستخدمين جدد.
    * تسجيل الدخول الآمن باستخدام JSON Web Tokens (JWT) للحفاظ على حالة المستخدم.
    * تسجيل الخروج.
* **إدارة المهام (Task Management - CRUD):**
    * **إنشاء (Create):** إضافة مهام جديدة بعناوين وأوصاف.
    * **قراءة (Read):** عرض جميع المهام الخاصة بالمستخدم المسجل دخوله.
    * **تحديث (Update):** تعديل تفاصيل المهمة وحالتها (معلقة، قيد التنفيذ، مكتملة).
    * **حذف (Delete):** إزالة المهام غير المرغوب فيها.
* **حالة المهمة:** ثلاث حالات محددة للمهام: "معلقة" (Pending)، "قيد التنفيذ" (In-progress)، "مكتملة" (Completed).

---

## التقنيات المستخدمة:

**الواجهة الخلفية (Backend):**
* **Node.js:** بيئة تشغيل JavaScript على الخادم.
* **Express.js:** إطار عمل سريع وغير رأي لبناء واجهات برمجة التطبيقات (APIs).
* **MongoDB:** قاعدة بيانات NoSQL مرنة وقابلة للتوسع لتخزين بيانات المستخدم والمهام.
* **Mongoose:** مكتبة ODM (Object Data Modeling) لـ MongoDB في Node.js.
* **JSON Web Tokens (JWT):** لتنفيذ المصادقة القائمة على الرموز المميزة.
* **Bcrypt.js:** لتشفير كلمات المرور بشكل آمن.
* **CORS:** للتعامل مع سياسة أصل الموارد المشتركة.

**الواجهة الأمامية (Frontend):**
* **React:** مكتبة JavaScript لبناء واجهات المستخدم التفاعلية.
* **React Router DOM:** لإدارة التوجيه في التطبيق أحادي الصفحة.
* **Axios:** مكتبة لإجراء طلبات HTTP إلى الواجهة الخلفية.
* **React Hooks (useState, useEffect, useNavigate, useCallback):** لإدارة حالة المكونات والتأثيرات الجانبية.

---

## المهارات التي تظهر في هذا المشروع:

* **Authentication & Authorization:** تنفيذ نظام مصادقة آمن باستخدام JWT.
* **RESTful APIs:** بناء واجهة برمجة تطبيقات منظمة وفعالة للتعامل مع الموارد.
* **React State Management:** إدارة حالة التطبيق بفعالية باستخدام React Hooks.
* **Database Integration:** التفاعل مع قاعدة بيانات MongoDB باستخدام Mongoose.
* **Full-stack Development:** القدرة على بناء تطبيق متكامل من الواجهة الأمامية إلى الواجهة الخلفية.

---

## كيفية تشغيل المشروع محلياً:

**المتطلبات الأساسية:**
* Node.js (مع npm)
* MongoDB Community Server
* Git

1.  **استنساخ المستودع (Clone the repository):**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    cd YOUR_REPOSITORY_NAME
    ```
2.  **إعداد الواجهة الخلفية (Backend Setup):**
    * انتقل إلى مجلد الواجهة الخلفية:
        ```bash
        cd task-manager-backend
        ```
    * تثبيت التبعيات:
        ```bash
        npm install
        ```
    * إنشاء ملف `.env` في مجلد `task-manager-backend` وإضافة المتغيرات التالية:
        ```
        MONGO_URI=mongodb://localhost:27017/taskmanager
        JWT_SECRET=your_super_secret_jwt_key
        PORT=5000
        ```
        (تأكد من استبدال `your_super_secret_jwt_key` بمفتاح سري قوي).
    * تشغيل الخادم:
        ```bash
        node server.js
        ```
        يجب أن يعمل الخادم الآن على `http://localhost:5000`.

3.  **إعداد الواجهة الأمامية (Frontend Setup):**
    * افتح نافذة طرفية جديدة وانتقل إلى مجلد الواجهة الأمامية:
        ```bash
        cd ../task-manager-frontend
        ```
    * تثبيت التبعيات:
        ```bash
        npm install
        ```
    * تأكد من إضافة السطر التالي في ملف `package.json` الخاص بالواجهة الأمامية (`task-manager-frontend/package.json`) لتوجيه طلبات الـ API:
        ```json
        "proxy": "http://localhost:5000",
        ```
        (أضفه تحت السطر `"private": true,`).
    * تشغيل تطبيق React:
        ```bash
        npm start
        ```
        يجب أن يفتح التطبيق في متصفحك على `http://localhost:3000`.
      **فيديو توضيحي (Demo Video):**
      https://drive.google.com/file/d/1dj5HWXxMXhTR4t5pBU8iZVUjL1vDiUyH/view?usp=drive_link

---


---

