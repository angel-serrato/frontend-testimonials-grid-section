import './Testimonials.css';
import danielImage from '../assets/image-daniel.jpg'
import jonathanImage from '../assets/image-jonathan.jpg'
import jeanetteImage from '../assets/image-jeanette.jpg'
import patrickImage from '../assets/image-patrick.jpg'
import kiraImage from '../assets/image-kira.jpg'
import QuoteIcon from '../assets/bg-pattern-quotation.svg'

function Testimonials() {
    return (
        <>
            <section class="testimonials">
                <article class="testimonial testimonial__daniel">
                    <div class="testimonial__header">
                        <img class="testimonial__image" src={danielImage} alt="Daniel Image" />
                        <div className="testimonial-info">
                            <h3 class="testimonial__name">Daniel Clifford</h3>
                            <span class="testimonial__status">Verified Graduate</span>
                        </div>
                    </div>
                    <h4 class="testimonial__title">
                        I received a job offer mid-course, and the subjects I learned were current, if not more so,
                        in the company I joined. I honestly feel I got every penny’s worth.
                    </h4>
                    <blockquote class="testimonial__quote">
                        “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                        transition and have heard some people who had an amazing experience here. I signed up
                        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                        The next 12 weeks was the best - and most grueling - time of my life. Since completing
                        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                    </blockquote>
                </article>

                <article class="testimonial testimonial__jonathan">
                    <div class="testimonial__header">
                        <img class="testimonial__image" src={jonathanImage} alt="Jonathan Image" />
                        <div className="testimonial-info">
                            <h3 class="testimonial__name">Jonathan Walters</h3>
                            <span class="testimonial__status">Verified Graduate</span>
                        </div>
                    </div>
                    <h4 class="testimonial__title">
                        The team was very supportive and kept me motivated
                    </h4>
                    <blockquote class="testimonial__quote">
                        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                        for a big company. This was one of the best investments I’ve made in myself. ”
                    </blockquote>
                </article>

                <article class="testimonial testimonial__jeanette">
                    <div class="testimonial__header">
                        <img class="testimonial__image" src={jeanetteImage} alt="Jeanette Image" />
                        <div className="testimonial-info">
                            <h3 class="testimonial__name">Jeanette Harmon</h3>
                            <span class="testimonial__status">Verified Graduate</span>
                        </div>
                    </div>
                    <h4 class="testimonial__title">
                        An overall wonderful and rewarding experience
                    </h4>
                    <blockquote class="testimonial__quote">
                        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                        while doing something I love. ”
                    </blockquote>
                </article>

                <article class="testimonial testimonial__patrick">
                    <div class="testimonial__header">
                        <img class="testimonial__image" src={patrickImage} alt="Patrick Image" />
                        <div className="testimonial-info">
                            <h3 class="testimonial__name">Patrick Abrams</h3>
                            <span class="testimonial__status">Verified Graduate</span>
                        </div>
                    </div>
                    <h4 class="testimonial__title">
                        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
                        learning from their experiences was easy.
                    </h4>
                    <blockquote class="testimonial__quote">
                        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
                        gave me the confidence necessary to be able to go out in the world and present myself as a capable
                        junior developer. The standard is above the rest. You will get the personal attention you need from
                        an incredible community of smart and amazing people. ”
                    </blockquote>
                </article>

                <article class="testimonial testimonial__kira">
                    <div class="testimonial__header">
                        <img class="testimonial__image" src={kiraImage} alt="Kira Image" />
                        <div className="testimonial-info">
                            <h3 class="testimonial__name">Kira Whittle</h3>
                            <span class="testimonial__status">Verified Graduate</span>
                        </div>
                    </div>
                    <h4 class="testimonial__title">
                        Such a life-changing experience. Highly recommended!
                    </h4>
                    <blockquote class="testimonial__quote">
                        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                        could ever have. In fact, I’ve often referred to it during interviews as an example of my development
                        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                        100% recommend! ”
                    </blockquote>
                </article>
            </section>
        </>
    )
}

export default Testimonials