const haploData = require('./haplogroups.json')

module.exports = {
    getHaploData: (req, res) => {
        let {regionName} = req.query
        let regionData

        for (let i = 0; i < haploData.length; i++){
            if (regionName === haploData[i].region){
                regionData = haploData[i]
            }
        }

        res.status(200).send(regionData)
    }
}