import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Process the request and retrieve dynamic data
    String dynamicData = "Hello, dynamic data!";
    
    // Set the dynamic data as an attribute in the request
    request.setAttribute("dynamicData", dynamicData);
    
    // Forward the request to the JSP
    request.getRequestDispatcher("index.jsp").forward(request, response);
  }
}
