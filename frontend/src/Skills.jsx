import { useEffect, useState } from "react";
import { fetchskills } from "./api";

function Skills(){
    const [skills, setskills] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        async function load() { 
            try{
                const data = await fetchskills();
                setskills(data);
            }catch(err){
                console.log (err);
                setError("Could not load skills from the server.");
            }finally{
                setLoading(false);
            }
        }

        load();

    },[]);

    console.log(skills);

    if(loading) return <p>Loading Skills...</p>;
    if(error) return <p style={{color: "red"}}>{error}</p>;
    if(skills.length === 0) return <p> no skills found</p>;

    return(
        <section>
            <h2>Skills</h2>
            <div className="projects-grid">
                {
                    skills.map((skill) =>(
                        <div key={skill.id} className="project-card">
                            <ul>
                                <li>
                                    {skill.skill_name}
                                </li>
                            </ul>   
                        </div>

                    ))};


            </div>
        </section>
    );

    
}

export default Skills;