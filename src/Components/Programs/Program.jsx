import React from 'react'
import './Program.css'
import priya from '../../assets/priya.jpeg'
import lipa from '../../assets/lipa.jpeg'
import laboyna from '../../assets/laboyna.jpeg'
import khushi from '../../assets/khushi.jpeg'
import hiya from '../../assets/hiya.jpeg'
import rumpa from '../../assets/rumpa.jpeg'
import anu from '../../assets/anu.jpeg'
import pritilota from '../../assets/pritilota.jpeg'
import amarita from '../../assets/amarita.jpeg'
import icon_1 from '../../assets/program-icon-1.png'
import icon_2 from '../../assets/program-icon-2.png'
import icon_3 from '../../assets/program-icon-3.png'

const Program = () => {
    return (
        <div className='progr'>
            <div className="fir3">
                <div className="progra">
                    <img src={priya} alt="" />
                    <div className='first'>
                        <h2>President</h2>
                        <p>Philosopy <span>Jagannath University</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>

                <div className="progra">
                    <img src={lipa} alt="" />
                    <div className='first'>
                        <h2>Vice President</h2>
                        <p>Philosopy <span>Jagannath University</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>

                <div className="progra">
                    <img src={laboyna} alt="" />
                    <div className='first'>
                        <h2>General Secretary</h2>
                        <p>Prints & arts <span> Rajshahi University</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>
            </div>

            <div className="seco3">
                <div className="progra">
                    <img src={khushi} alt="" />
                    <div className='first'>
                        <h2>Organizing Secretary</h2>
                        <p>Philosopy <span>Jagannath University</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>
                <div className="progra">
                    <img src={hiya} alt="" />
                    <div className='first'>
                        <h2>Finance Secretary</h2>
                        <p> <span>Gopalganj Medical College</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>
                <div className="progra">
                    <img src={amarita} alt="" />
                    <div className='first'>
                        <h2>Legal and Consulting Editor</h2>
                        <p>Dance <span>Jagannath University</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>
            </div>

            <div className="thir3">
                <div className="progra">
                    <img src={pritilota} alt="" />
                    <div className='first'>
                        <h2>Publicity and Publications Affairs Editor</h2>
                        <p>Philosopy <span>MBSTU</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>

                <div className="progra">
                    <img src={anu} alt="" />
                    <div className='first'>
                        <h2>Research and Documentation Editor</h2>
                        <p>Philosopy <span>Jagannath University</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>

                <div className="progra">
                    <img src={rumpa} alt="" />
                    <div className='first'>
                        <h2>Women's Empowerment Editor</h2>
                        <p>Philosopy <span>HSTU</span></p>
                        <p>priyarani9779@gmail.com</p>
                        <p>01774086599</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Program
