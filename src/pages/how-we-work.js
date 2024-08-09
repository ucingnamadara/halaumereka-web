import { FileSearch, GraduationCap, MonitorCheck, Wrench } from "lucide-react";

export function HowWeWork(){
    return(<section class="bg-gray-100 flex flex-col justify-center items-center" id = "our-work">
        <div class="bg-gray-100 flex flex-col gap-5 max-w-screen-2xl px-5 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-32 w-full">
          <div>
            <h2 class="text-3xl font-bold sm:text-4xl">Our Approach to Cybersecurity</h2>
      
            <p class="mt-4 text-black-300">
            At Halau Mereka, we believe in a proactive and dynamic approach to cybersecurity.
            </p>
          </div>

          <h2 className="text-3xl font-semibold">Our Philosophy</h2>
          <p>Cybersecurity isn't just about responding to threats, it's about preventing them. We understand that in the digital age, the safety of your data is paramount. That’s why we employ a forward-thinking strategy that anticipates and neutralizes threats before they can impact your business.</p>
          <h2 className="text-3xl font-semibold">Our Process</h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-full bg-yellow-500 p-3">
                <FileSearch/>
              </span>
      
              <div>
                <h2 class="text-lg font-semibold">Assessment</h2>
                <p class="mt-1 text-sm">
                    We begin by thoroughly assessing your current security posture, identifying potential vulnerabilities, and understanding your specific needs.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-full bg-yellow-500 p-3">
                <Wrench/>
              </span>
      
              <div>
                <h2 class="text-lg font-semibold">Implementation</h2>
                <p class="mt-1 text-sm">
                    Leveraging cutting-edge technology and best practices, we implement robust security measures tailored to protect your assets.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-full bg-yellow-500 p-3">
                <MonitorCheck/>
              </span>
      
              <div>
                <h2 class="text-lg font-semibold">Monitoring</h2>
                <p class="mt-1 text-sm">
                Our state-of-the-art monitoring systems provide real-time surveillance to detect and respond to threats as they arise.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-full bg-yellow-500 p-3">
                <GraduationCap/>
              </span>
      
              <div>
                <h2 class="text-lg font-semibold">Education</h2>
                <p class="mt-1 text-sm">
                We empower your team with the knowledge to recognize and prevent security breaches, fostering a culture of cybersecurity awareness.
                </p>
              </div>
            </div>

          </div>
          <h2 className="text-3xl font-semibold">Our Commitment</h2>
          <p>We are committed to providing comprehensive protection. From endpoint security to cloud defenses, our services cover every aspect of your digital presence. Our AI-enabled solutions ensure efficient threat detection and remediation, while our experts stand ready to tackle complex challenges.</p>
          <h2 className="text-3xl font-semibold">Our Promise</h2>
          <p>With Halau Mereka, you can focus on what you do best, knowing that your cybersecurity is in expert hands. We’re not just your security provider; we’re your partner in building a secure digital future.</p>
        </div>
      </section>)
}