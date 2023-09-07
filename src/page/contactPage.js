function createDetail() {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <div class="contact-us">Contact Us</div>
    <div class="contact-info">
        <div class="location">
            <div class="title">Location</div>
            <div class="text">1831 W Burnside St, Portland</div>
        </div>
        <div class="hours">
            <div class="title">Hours</div>
            <div class="text">
                Monday: 7:00 AM - 9:00 PM <br>
                Tuesday: 7:00 AM - 9:00 PM <br>
                Wednesday: 7:00 AM - 9:00 PM<br>
                Thursday: 7:00 AM - 9:00 PM<br>
                Friday: 7:00 AM - 11:00 PM<br>
                Saturday: 10:00 AM - 11:00 PM<br>
                Sunday: 10:00 AM - 11:00 PM
            </div>
        </div>
        <div class="details">
            <div class="title">Details</div>
            <div class="text">
                Phone Number: <br>
                <div><span class="phone-icon"></span><a href="tel:+15032276870">+1 503-227-6870</a></div><br>
                Email Address: <br>
                <div><span class="email-icon"></span> <a href="mailto:paul@paulsrestaurant.com">paul@paulsrestaurant.com</a></div><br>
                Or, just send us a message using the form below:
            </div>
        </div>
    </div>
        <form action="" class="contact-form">
            <div class="title">Contact Form</div>
            <ol>
                <li>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </li>
                <li>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                
                </li>
                <li>
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </li>
            </ol>  
            <button>Submit Button</button>
        </form>
    `
};



export default function() {
    createDetail();
};