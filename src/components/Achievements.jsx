import "./Achievements.css";

function Achievements(){
    return(
        <section id="achievements" className="achievements">
            <h2>Achievements & Activities</h2>
            <div className="ach-single-card">
                 <ul>
                <li> Secured 3rd place in IEEE national-level hackathon conducted by RV University</li>

                <li> Solved 700+ LeetCode problems improving DSA and problem-solving skills</li>

                <li> Awarded scholarship for academic excellence (Top 5% CGPA: 9.63)</li>

                <li> Open source contributions in Hacktoberfest 2024 & GSSoC 2024</li>

                <li> Founder & President of ChipTech Club (organized technical events)</li>
                </ul>
            </div>
        </section>
    );
}
export default Achievements;