import VulenteerDetails from './VulenteerDetails'

const OurVulenteers = () => {

    const vulenters = [
        {
            "id": 1010,
            "img": "https://i.ibb.co/VBG5w7T/shahadat.png",
            "name": "Shahadat Hossain",
            "position": "Team Leader"
        },
        {
            "id": 1020,
            "img": "https://i.ibb.co/SPKz80N/joney.png",
            "name": "MD Ismail Hossen Joney",
            "position": "Member"
        },
        {
            "id": 1030,
            "img": "https://i.ibb.co/BzPZNcF/risan.png",
            "name": "Risan Ahamed",
            "position": "Member"
        },
        {
            "id": 1040,
            "img": "https://i.ibb.co/sCtz6Qq/aminul.png",
            "name": "Aminul Islam",
            "position": "Member"
        },
        {
            "id": 1050,
            "img": "https://i.ibb.co/gjQXz1c/rabiul.png",
            "name": "Md Rabiul Islam",
            "position": "Member"
        },
        {
            "id": 1060,
            "img": "https://i.ibb.co/mS6s3ZT/barman.jpg",
            "name": "Suman Chandra Barman",
            "position": "Member"
        }
    ]

    return (
        <div className='my-20'>
            <h2 className="text-[24px] font-bold text-center lg:text-[36px] mb-10">Our Volenteers</h2>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 mx-10'>
                {
                    vulenters.map(vulenter => <VulenteerDetails
                        key={vulenter.id}
                        vulenter={vulenter}
                    ></VulenteerDetails>)
                }
            </div>
        </div>
    );
};

export default OurVulenteers;