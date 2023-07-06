import multer from "multer";

// Configure Multer
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (_, file, cb) => {
    const originalName = file.originalname;
    const fileName = `${Date.now()}_${originalName
      .replace(/[\ \_]/g, "_")
      .toLowerCase()}`;
    cb(null, fileName);
  },
});

// Configure Multer Storage
const upload = multer({ storage });

// Define the API endpoint handler
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  upload.fields([
    { name: "bannerImages", maxCount: 20 },
    { name: "galleryImages", maxCount: 20 },
    { name: "featuredImages", maxCount: 20 },
  ])(req, res, (err) => {
    if (err) {
      return res.status(500).json({
        acknowledgement: false,
        message: err.message,
      });
    }

    const files = {};
    // const protocol = req.headers["x-forwarded-proto"] || "http";
    // const host = req.headers.host;
    // const url = `${protocol}://${host}`;

    for (const field in req.files) {
      files[field] = req.files[field].map((file) => ({
        // filename: `${url}/uploads/${file.filename}`,
        filename: `uploads/${file.filename}`,
      }));
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Files uploaded successfully",
      files,
    });
  });
}
