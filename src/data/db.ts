const products = [
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd12",
        "name": "Basketball",
        "image": "basketball-image.jpg",
        "description": "An official size basketball for both indoor and outdoor play.",
        "price": 29.99,
        "quantity": 30,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "name": "Volleyball",
        "image": "volleyball-image.jpg",
        "description": "Soft touch volleyball ideal for beach or gym use.",
        "price": 19.99,
        "quantity": 15,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "f9e8d7c6-b5a4-3210-9876-543210fedcba",
        "name": "Soccer Ball",
        "image": "soccer-ball-image.jpg",
        "description": "Regulation size 5 soccer ball with high visibility design.",
        "price": 24.50,
        "quantity": 45,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "11223344-5566-7788-99aa-bbccddeeff00",
        "name": "Tennis Racket",
        "image": "tennis-racket-image.jpg",
        "description": "Lightweight carbon fiber racket for intermediate players.",
        "price": 89.99,
        "quantity": 10,
        "onStock": true,
        "category": "5a8b72f6-a7d3-556e-91gc-80g69f4e172c"
    },
    {
        "id": "99887766-5544-3322-1100-aabbccddeeff",
        "name": "Yoga Mat",
        "image": "yoga-mat-image.jpg",
        "description": "Non-slip 6mm thick yoga mat with carrying strap.",
        "price": 35.00,
        "quantity": 50,
        "onStock": true,
        "category": "6b9c83g7-b8e4-667f-a2hd-91h70g5f283d"
    },
    {
        "id": "deadbeef-cafe-babe-1234-567890abcdef",
        "name": "Dumbbell Set",
        "image": "dumbbell-set-image.jpg",
        "description": "Adjustable dumbbell set ranging from 5 to 25 lbs.",
        "price": 149.99,
        "quantity": 8,
        "onStock": true,
        "category": "7c0d94h8-c9f5-778g-b3ie-02i81h6g394e"
    },
    {
        "id": "00112233-4455-6677-8899-aabbccddeeff",
        "name": "Jump Rope",
        "image": "jump-rope-image.jpg",
        "description": "Speed jump rope with adjustable cable length.",
        "price": 12.99,
        "quantity": 100,
        "onStock": true,
        "category": "6b9c83g7-b8e4-667f-a2hd-91h70g5f283d"
    },
    {
        "id": "ffeeddcc-bbaa-9988-7766-554433221100",
        "name": "Baseball Glove",
        "image": "baseball-glove-image.jpg",
        "description": "Genuine leather baseball glove, pre-oiled for flexibility.",
        "price": 45.00,
        "quantity": 12,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "aabbccdd-eeff-0011-2233-445566778899",
        "name": "Golf Clubs",
        "image": "golf-clubs-image.jpg",
        "description": "Complete set of 12 golf clubs with stand bag.",
        "price": 299.99,
        "quantity": 5,
        "onStock": false,
        "category": "8d1e05i9-d0g6-889h-c4jf-13j92i7h405f"
    },
    {
        "id": "12345678-90ab-cdef-1234-567890abcdef",
        "name": "Swimming Goggles",
        "image": "swimming-goggles-image.jpg",
        "description": "Anti-fog and UV protection swimming goggles.",
        "price": 15.50,
        "quantity": 60,
        "onStock": true,
        "category": "9e2f16j0-e1h7-990i-d5kg-24k03j8i516g"
    },
    {
        "id": "abcdef01-2345-6789-abcd-ef0123456789",
        "name": "Tennis Balls (3-Pack)",
        "image": "tennis-balls-image.jpg",
        "description": "Pressurized tennis balls for consistent bounce.",
        "price": 8.99,
        "quantity": 80,
        "onStock": true,
        "category": "5a8b72f6-a7d3-556e-91gc-80g69f4e172c"
    },
    {
        "id": "98765432-10fe-dcba-9876-543210fedcba",
        "name": "Basketball Hoop",
        "image": "basketball-hoop-image.jpg",
        "description": "Wall-mounted basketball hoop with breakaway rim.",
        "price": 119.99,
        "quantity": 7,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "c0ffee00-baad-f00d-1234-567890abcdef",
        "name": "Running Shoes",
        "image": "running-shoes-image.jpg",
        "description": "Lightweight running shoes with breathable mesh.",
        "price": 79.99,
        "quantity": 25,
        "onStock": true,
        "category": "0f3g27k1-f2i8-001j-e6lh-35l14k9j627h"
    },
    {
        "id": "feedface-c0de-babe-4321-0987654321fe",
        "name": "Football",
        "image": "football-image.jpg",
        "description": "Official size composite leather football.",
        "price": 27.50,
        "quantity": 22,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "13579bdf-2468-ace0-1357-9bdf2468ace0",
        "name": "Ping Pong Paddles",
        "image": "ping-pong-paddles-image.jpg",
        "description": "Set of 4 table tennis paddles and 6 balls.",
        "price": 22.00,
        "quantity": 35,
        "onStock": true,
        "category": "5a8b72f6-a7d3-556e-91gc-80g69f4e172c"
    },
    {
        "id": "24680ace-1357-9bdf-2468-ace013579bdf",
        "name": "Boxing Gloves",
        "image": "boxing-gloves-image.jpg",
        "description": "16oz training gloves with reinforced knuckles.",
        "price": 55.00,
        "quantity": 18,
        "onStock": true,
        "category": "7c0d94h8-c9f5-778g-b3ie-02i81h6g394e"
    },
    {
        "id": "abcdef12-3456-7890-abcd-ef1234567890",
        "name": "Skateboard",
        "image": "skateboard-image.jpg",
        "description": "Standard size skateboard with durable maple deck.",
        "price": 65.00,
        "quantity": 9,
        "onStock": true,
        "category": "1g4h38l2-g3j9-112k-f7mi-46m25l0k738i"
    },
    {
        "id": "fedcba98-7654-3210-fedc-ba9876543210",
        "name": "Hula Hoop",
        "image": "hula-hoop-image.jpg",
        "description": "Weighted fitness hula hoop for core workouts.",
        "price": 18.00,
        "quantity": 40,
        "onStock": true,
        "category": "6b9c83g7-b8e4-667f-a2hd-91h70g5f283d"
    },
    {
        "id": "0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
        "name": "Badminton Set",
        "image": "badminton-set-image.jpg",
        "description": "Portable badminton net, 4 rackets, and 3 shuttlecocks.",
        "price": 42.99,
        "quantity": 14,
        "onStock": true,
        "category": "5a8b72f6-a7d3-556e-91gc-80g69f4e172c"
    },
    {
        "id": "5d4c3b2a-1f0e-9d8c-7b6a-5f4e3d2c1b0a",
        "name": "Water Bottle",
        "image": "water-bottle-image.jpg",
        "description": "Insulated stainless steel sports water bottle, 32oz.",
        "price": 21.99,
        "quantity": 120,
        "onStock": true,
        "category": "0f3g27k1-f2i8-001j-e6lh-35l14k9j627h"
    }
];

export const db = {
    products
}