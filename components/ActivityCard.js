import React from 'react';
import PropTypes from 'prop-types';

const ActivityCard = ({ activity }) => {
    // Limit the number of participants displayed to improve performance
    const MAX_PARTICIPANTS_DISPLAY = 100;

    return (
        <div className="activity-card">
            <div className="activity-details">
                <div className="participants-section">
                    <h3>Participants</h3>
                    <ul>
                        {activity.participants && activity.participants.length > 0 ? (
                            activity.participants.slice(0, MAX_PARTICIPANTS_DISPLAY).map((participant, index) => (
                                <li key={index}>{participant}</li>
                            ))
                        ) : (
                            <li>No participants yet</li>
                        )}
                    </ul>
                    {/* Add a message if the list is truncated */}
                    {activity.participants && activity.participants.length > MAX_PARTICIPANTS_DISPLAY && (
                        <p>And more...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
