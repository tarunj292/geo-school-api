const { add, list } = require('./schoolService')
const { calculateDistance } = require('../../utils/calculateDistance')
const addSchool = (req, res) => {
    const body = req.body
    const { name, address, latitude, longitude } = body
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({
            success: false,
            message: "All fields (name, address, latitude, longitude) are required."
        });
    }

    if (typeof name !== 'string' || typeof address !== 'string') {
        return res.status(400).json({
            success: false,
            message: "Name and address must be strings."
        });
    }

    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({
            success: false,
            message: "Latitude and longitude must be numbers."
        });
    }
    if (latitude < -90 || latitude > 90) {
        return res.status(400).json({
            success: false,
            message: "Latitude must be between -90 and 90."
        });
    }

    if (longitude < -180 || longitude > 180) {
        return res.status(400).json({
            success: false,
            message: "Longitude must be between -180 and 180."
        });
    }

    if (name.length < 3 || name.length > 255) {
        return res.status(400).json({
            success: false,
            message: "Name must be between 3 and 255 characters long."
        });
    }

    if (address.length < 10 || address.length > 255) {
        return res.status(400).json({
            success: false,
            message: "Address must be between 10 and 255 characters long."
        });
    }

    add(body, (err, results) => {
        if (err) {
            if (err.errno === 1062) {
                return res.status(409).json({
                    success: false,
                    message: err.sqlMessage
                })
            }
            if (err.errno == 1048) {
                return res.status(400).json({
                    success: false,
                    message: err.sqlMessage
                })
            }
            if (err.errno == 3819) {
                return res.status(400).json({
                    success: false,
                    message: err.sqlMessage
                })
            }
            return res.status(500).json({
                success: false,
                message: "Database connection error"
            })
        }
        return res.status(201).json({
            success: 1,
            message: "School added successfully",
            data: results
        })
    })
}

const listSchools = (req, res) => {
    const body = req.body
    const { latitude, longitude } = body

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    const userLat = parseFloat(latitude);
    const userLng = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLng)) {
        return res.status(400).json({ message: 'Invalid latitude or longitude' });
    }
    
    if (userLat < -90 || userLat > 90) {
        return res.status(400).json({
            success: false,
            message: "Latitude must be between -90 and 90."
        });
    }

    if (userLng < -180 || userLng > 180) {
        return res.status(400).json({
            success: false,
            message: "Longitude must be between -180 and 180."
        });
    }

    list((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            })
        }
        const schoolsWithDistance = results.map(school => {
            const distance = calculateDistance(userLat, userLng, school.latitude, school.longitude);
            return { ...school, distance };
        });

        schoolsWithDistance.sort((a, b) => a.distance - b.distance)

        return res.status(200).json({
            success: true,
            message: "Success",
            data: schoolsWithDistance
        })
    })
}

module.exports = { addSchool, listSchools }