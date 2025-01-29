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
        <div className="space-y-12 px-4 md:px-10 lg:px-20">
          {/* Step 1 - Sign Up */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <img
              src={signup}
              alt="Sign Up"
              className="w-[80%] md:w-[50%] lg:w-[40%] max-w-sm"
            />

            {/* Text Content */}
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Sign Up and Set Your Preference
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Getting started with Co-Car is simple. Create your account using
                your email or phone number and complete your profile. Set key
                preferences like your pickup location, destination, and travel
                timings to ensure a commuting experience tailored to your needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 md:px-10 lg:px-20">
            {/* Text Content */}
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Get Matched to Fellow Commuters
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Our advanced algorithm connects you with fellow commuters
                traveling on similar routes at overlapping times. Share rides,
                save money, and enjoy a more social and sustainable way to
                commute.
              </p>
            </div>

            {/* Image Section */}
            <img
              src={getmatched}
              alt="Get Matched"
              className="w-[80%] md:w-[50%] lg:w-[40%] max-w-sm"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-10 lg:px-20">
            {/* Image Section */}
            <img
              src={realtime}
              alt="Real-Time Tracking"
              className="w-[80%] md:w-[50%] lg:w-[40%] max-w-sm"
            />

            {/* Text Content */}
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Stay Informed with Real-Time Tracking
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Once your ride is confirmed, monitor it live through the app.
                Get updates on your driver’s location, estimated arrival time,
                and the route—keeping you informed every step of the way for a
                stress-free journey.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 md:px-10 lg:px-20">
            {/* Text Content */}
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Save More, Earn Rewards
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                With every shared trip, you reduce travel costs and earn reward
                points. Accumulate points to redeem for discounts, offers, or
                exclusive perks, turning your daily commute into a rewarding
                experience.
              </p>
            </div>

            {/* Image */}
            <img
              src={save}
              alt="Save More"
              className="w-[80%] md:w-[50%] lg:w-[40%] max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
