import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Process the request and prepare data
    String message = "Hello, World!";

    // Set the data as an attribute in the request
    request.setAttribute("message", message);

    // Forward the request to the JSP
    request.getRequestDispatcher("mypage.jsp").forward(request, response);
  }
}
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Process the request and prepare data
    String message = "Hello, World!";

    // Set the data as an attribute in the request
    request.setAttribute("message", message);

    // Forward the request to the JSP
    request.getRequestDispatcher("mypage.jsp").forward(request, response);
  }
}
