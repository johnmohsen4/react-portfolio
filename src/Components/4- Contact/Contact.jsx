import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

const Contact = () => {
    const [state, handleSubmit] = useForm("mldrnayr");

    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"> </span>
                Contact Us
            </h1>
            <p className="sub-title">
                Contact us for more information and get notified when I puplish
                something new.
            </p>
            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit} className="">
                    <div className="flex" style={{ marginBottom: "24px" }}>
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="message">Your Message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className="submit">
                        {state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                    {state.succeeded && (
                        <p
                            className="flex"
                            style={{ fontSize: "1rem", marginTop: "1.7rem" }}
                        >
                            <Lottie
                                loop={false}
                                style={{ height: 37 }}
                                animationData={doneAnimation}
                            />
                            Your message has been sent succesfully !!
                        </p>
                    )}
                </form>
                <div className="animation">
                    <Lottie
                        className="contact-animation"
                        style={{ height: "22rem" }}
                        animationData={contactAnimation}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
