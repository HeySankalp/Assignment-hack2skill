export function stringAvatar(name) {
    if (!name) return;
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 12,
            height: 12,
            padding: 2
        },
        children: `${name[0]}`,
    };
}

export function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string?.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}


export const calculateMean = (arr) => {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
};

// Function to calculate median
export const calculateMedian = (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

// Function to calculate mode
export function calculateMode(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;

    arr.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    });

    const modes = [];

    for (const key in frequencyMap) {
        if (frequencyMap[key] === maxFrequency) {
            modes.push(Number(key));
        }
    }

    return modes.length > 1 ? modes : modes[0];
}