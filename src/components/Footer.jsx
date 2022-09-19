

export default function Footer() {
  return(
    <footer className="footer">
        <p>This app was created by <a href="https://github.com/khisus19">Khisus19</a> for practice React.</p>
        <ul>
            <li>
              <a href="https://github.com/khisus19" target="_blank">
                <img src="./github.svg" alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/khisus19/" target="_blank">
                <img src="./linkedin.svg" alt="linkedin icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/khisus19/" target="_blank">
                <img src="./instagram.svg" alt="instagram icon" />
              </a>
            </li>
        </ul>
    </footer>
  )
}