import signup from "../assets/gifs/signup.gif";
import getmatched from "../assets/gifs/getmatched.gif";
import realtime from "../assets/gifs/realtimetracking.gif";
import save from "../assets/gifs/saveandearn.gif";
const Howitworks = () => {
  return (
    <div className="px-6 py-4 lg:px-35 md:px-25 mt-5">
      <div className="space-y-8 px-4 md:px-10 lg:px-20">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          How it works?
        </h1>

        {/* Steps Container */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-20 w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16">
            {/* Image Section - Increased Size */}
            <img
              src={signup}
              alt="Sign Up"
              className="w-full md:w-[65%] lg:w-[55%] xl:w-[50%] max-w-3xl"
            />

            {/* Text Content - Increased Font Size */}
            <div className="text-center md:text-left md:pl-10 lg:pl-16 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sign Up and Set Your Preference
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                Getting started with Co-Car is simple. Create your account using
                your email or phone number and complete your profile. Set key
                preferences like your pickup location, destination, and travel
                timings to ensure a commuting experience tailored to your needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-20 w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16">
            {/* Text Content - Increased Font Size */}
            <div className="text-center md:text-left md:pr-10 lg:pr-16 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Matched to Fellow Commuters
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                Our advanced algorithm connects you with fellow commuters
                traveling on similar routes at overlapping times. Share rides,
                save money, and enjoy a more social and sustainable way to
                commute.
              </p>
            </div>

            {/* Image Section - Increased Size */}
            <img
              src={getmatched}
              alt="Get Matched"
              className="w-full md:w-[65%] lg:w-[55%] xl:w-[50%] max-w-3xl"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-20 w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16">
            {/* Image Section - Increased Size */}
            <img
              src={realtime}
              alt="Real-Time Tracking"
              className="w-full md:w-[65%] lg:w-[55%] xl:w-[50%] max-w-3xl"
            />

            {/* Text Content - Increased Font Size */}
            <div className="text-center md:text-left md:pl-10 lg:pl-16 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Stay Informed with Real-Time Tracking
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                Once your ride is confirmed, monitor it live through the app.
                Get updates on your driver’s location, estimated arrival time,
                and the route—keeping you informed every step of the way for a
                stress-free journey.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-20 w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16">
            {/* Text Content - Increased Font Size */}
            <div className="text-center md:text-left md:pr-10 lg:pr-16 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Save More, Earn Rewards
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                With every shared trip, you reduce travel costs and earn reward
                points. Accumulate points to redeem for discounts, offers, or
                exclusive perks, turning your daily commute into a rewarding
                experience.
              </p>
            </div>

            {/* Image Section - Increased Size */}
            <img
              src={save}
              alt="Save More"
              className="w-full md:w-[65%] lg:w-[55%] xl:w-[50%] max-w-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
